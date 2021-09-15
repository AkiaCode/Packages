import { searchCrate } from '../packages/crates.io.ts'
import { searchDeno } from '../packages/deno.ts'
import { searchHex } from '../packages/hexpm.ts'
import { searchNpm } from '../packages/npmjs.ts'
import { ResponseJSON } from '../util.ts'

const search = async (name: string, searchParams: URLSearchParams) => {
    if (searchParams.get('lang') === 'deno') {
        const json = await searchDeno(name)
        return ResponseJSON(json.data.results)
    } else if (searchParams.get('lang') === 'nodejs') {
        return ResponseJSON(await searchNpm(name))
    } else if (searchParams.get('lang') ===  'elixir') {
        return ResponseJSON(await searchHex(name))
    } else if (searchParams.get('lang') === 'rust') {
        return ResponseJSON(await searchCrate(name))
    }

    return ResponseJSON({
        error: 'No language specified'
    })
}


export default search;