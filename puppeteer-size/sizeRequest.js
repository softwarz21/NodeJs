function formatByteSize(bytes) {
    if(bytes < 1024) return bytes + " Bytes";
    else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
    else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MB";
    else return(bytes / 1073741824).toFixed(3) + " GB";
};

export async function sizeRequest(URL) {
  let size;
  const puppeteer = require('puppeteer');
  
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    const response = await page.goto(URL);
    size = formatByteSize((await response.buffer()).length);

    await browser.close();
  }
  catch (err) {
    console.error(err);
    size = null;
  }

  return await size;
};