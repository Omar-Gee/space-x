import * as fs from 'fs'
import * as readline from 'readline'

/**
 * Return gitInfo.txt lines
 */
export default async function (): Promise<string> {
  const fileStream = fs.createReadStream('gitInfo.txt')

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    return line
  }
  return ''
}
