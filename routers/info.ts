import { ResponseJSON } from '../util.ts'
import { infoDeno } from '../pacakges/deno.ts'
import { infoNpm } from '../pacakges/npmjs.ts'
import { infoHex } from '../pacakges/hexpm.ts'
import { infoCrate } from '../pacakges/crates.io.ts'

const info = async (name: string, searchParams: URLSearchParams) => {
    if (searchParams.get('lang') === 'deno') {
        return ResponseJSON(await infoDeno(name))
    } else if (searchParams.get('lang') === 'nodejs') {
        return ResponseJSON(await infoNpm(name))
    } else if (searchParams.get('lang') ===  'elixir') {
        return ResponseJSON(await infoHex(name))
    } else if (searchParams.get('lang') === 'rust') {
        return ResponseJSON(await infoCrate(name))
    }

    return ResponseJSON({
        error: 'No language specified'
    })
}


export default info;