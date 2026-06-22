const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const filePath = 'file://' + path.resolve('index.html');
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    // Wait for JS to run
    await new Promise(r => setTimeout(r, 1000));

    const indicatorInfo = await page.evaluate(() => {
        const el = document.getElementById('scrollIndicator');
        if (!el) return { error: 'Not found' };
        const style = window.getComputedStyle(el);
        const children = el.children.length;
        const rect = el.getBoundingClientRect();
        return {
            display: style.display,
            opacity: style.opacity,
            visibility: style.visibility,
            zIndex: style.zIndex,
            childrenCount: children,
            rect: JSON.stringify(rect),
            className: el.className,
            sliderTransform: document.getElementById('scrollSlider') ? document.getElementById('scrollSlider').style.transform : 'no-slider'
        };
    });

    console.log(JSON.stringify(indicatorInfo, null, 2));

    await browser.close();
})();
