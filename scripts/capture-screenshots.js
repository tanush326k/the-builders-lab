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

const PORT = 5201
server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Static server running at http://127.0.0.1:${PORT}`)

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

  try {
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

    console.log('Navigating to portfolio...')
    await page.goto(`http://127.0.0.1:${PORT}`, { waitUntil: 'networkidle0' })
    await new Promise((r) => setTimeout(r, 1500))

    // 1. Hero desktop
    console.log('Capturing hero-desktop.png...')
    await page.screenshot({
      path: path.join(outputDir, 'hero-desktop.png'),
      clip: { x: 0, y: 0, width: 1440, height: 860 },
    })

    // 2. About section
    console.log('Capturing about-section.png...')
    await page.evaluate(() => document.querySelector('#about')?.scrollIntoView())
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'about-section.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    })

    // 3. Skills section
    console.log('Capturing skills-section.png...')
    await page.evaluate(() => document.querySelector('#skills')?.scrollIntoView())
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'skills-section.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    })

    // 4. Projects catalogue
    console.log('Capturing projects-showcase.png...')
    await page.evaluate(() => document.querySelector('#projects')?.scrollIntoView())
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'projects-showcase.png'),
      clip: { x: 0, y: 0, width: 1440, height: 950 },
    })

    // 5. Builder's Quest Start
    console.log('Capturing builders-quest-start.png...')
    await page.evaluate(() => document.querySelector('#lab')?.scrollIntoView())
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'builders-quest-start.png'),
      clip: { x: 0, y: 0, width: 1440, height: 880 },
    })

    // 6. Interactive Quest Walkthrough -> Result
    console.log('Executing Builder Quest flow...')
    const firstChallenge = await page.$('.quest-choice')
    if (firstChallenge) {
      await firstChallenge.click()
      await new Promise((r) => setTimeout(r, 600))

      const firstScenarioOption = await page.$('.quest-choice')
      if (firstScenarioOption) {
        await firstScenarioOption.click()
        console.log('Scenario selected, waiting for result generation...')
        // Wait for processing lines to finish (around 2200ms)
        await new Promise((r) => setTimeout(r, 2600))

        console.log('Capturing builders-quest-result.png...')
        await page.evaluate(() => document.querySelector('#lab')?.scrollIntoView())
        await new Promise((r) => setTimeout(r, 500))
        await page.screenshot({
          path: path.join(outputDir, 'builders-quest-result.png'),
          clip: { x: 0, y: 0, width: 1440, height: 920 },
        })
      }
    }

    // 7. Leadership & Achievements
    console.log('Capturing leadership-section.png...')
    await page.evaluate(() => document.querySelector('#leadership')?.scrollIntoView())
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'leadership-section.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    })

    // 8. Contact section
    console.log('Capturing contact-section.png...')
    await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView())
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'contact-section.png'),
      clip: { x: 0, y: 0, width: 1440, height: 850 },
    })

    // 9. Mobile overview
    console.log('Capturing mobile-overview.png...')
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true })
    await page.evaluate(() => window.scrollTo(0, 0))
    await new Promise((r) => setTimeout(r, 800))
    await page.screenshot({
      path: path.join(outputDir, 'mobile-overview.png'),
      clip: { x: 0, y: 0, width: 390, height: 844 },
    })

    console.log('All 9 real screenshots captured successfully!')
    await browser.close()
  } catch (err) {
    console.error('Error during screenshot capture:', err)
  } finally {
    server.close()
    process.exit(0)
  }
})
