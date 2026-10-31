import puppeteer from 'puppeteer-core'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '../dist')
const outputDir = path.resolve(__dirname, '../docs/screenshots')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0]
  if (reqPath === '/') reqPath = '/index.html'

  let filePath = path.join(distDir, reqPath)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html')
  }

  const ext = path.extname(filePath).toLowerCase()
  const mime = MIME_TYPES[ext] || 'application/octet-stream'

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    res.writeHead(200, { 'Content-Type': mime })
    res.end(data)
  })
})

const PORT = 5210
server.listen(PORT, '127.0.0.1', async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

  try {
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1360, height: 850, deviceScaleFactor: 1.5 })

    await page.goto(`http://127.0.0.1:${PORT}`, { waitUntil: 'networkidle0' })
    await new Promise((r) => setTimeout(r, 1200))

    // 1. Hero Desktop
    await page.evaluate(() => window.scrollTo(0, 0))
    await new Promise((r) => setTimeout(r, 500))
    await page.screenshot({
      path: path.join(outputDir, 'hero-desktop.png'),
    })

    // 2. Projects Showcase
    await page.evaluate(() => {
      const el = document.querySelector('#projects')
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 30
        window.scrollTo(0, top)
      }
    })
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'projects-showcase.png'),
    })

    // 3. Builder's Quest (Interactive state -> Result card)
    await page.evaluate(() => {
      const el = document.querySelector('#lab')
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 30
        window.scrollTo(0, top)
      }
    })
    await new Promise((r) => setTimeout(r, 600))

    const challengeBtn = await page.$('.quest-choice')
    if (challengeBtn) {
      await challengeBtn.click()
      await new Promise((r) => setTimeout(r, 600))

      const scenarioBtn = await page.$('.quest-choice')
      if (scenarioBtn) {
        await scenarioBtn.click()
        await new Promise((r) => setTimeout(r, 2600))

        await page.evaluate(() => {
          const card = document.querySelector('.archetype-card') || document.querySelector('#lab')
          if (card) {
            const top = card.getBoundingClientRect().top + window.scrollY - 70
            window.scrollTo(0, Math.max(0, top))
          }
        })
        await new Promise((r) => setTimeout(r, 600))

        await page.screenshot({
          path: path.join(outputDir, 'builders-quest-result.png'),
        })
      }
    }

    // 4. Skills Matrix
    await page.evaluate(() => {
      const el = document.querySelector('#skills')
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 30
        window.scrollTo(0, top)
      }
    })
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'skills-matrix.png'),
    })

    await browser.close()
  } catch (err) {
    console.error('Error during capture:', err)
  } finally {
    server.close()
    process.exit(0)
  }
})
