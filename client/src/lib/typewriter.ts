export async function* typewriter(lines: string[], minDelay = 400, maxDelay = 800) {
  for (const line of lines) {
    yield line;
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    await new Promise(r => setTimeout(r, delay));
  }
}
