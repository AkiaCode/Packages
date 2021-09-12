import { request } from '../util.ts'

const searchDeno = (name: string) => {
    return request(`https://api.deno.land/modules?page=1&limit=20&query=${name}`);
}

const infoDeno = (name: string) => {
    return request(`https://api.deno.land/modules/${name}`);
}

export { searchDeno, infoDeno };