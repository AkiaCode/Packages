import { request } from '../util.ts'

const searchCrate = (name: string) => {
    return request(`https://crates.io/api/v1/crates?page=1&per_page=10&q=${name}`);
}

const infoCrate = (name: string) => {
    return request(`https://crates.io/api/v1/crates/${name}`);
}

export { searchCrate, infoCrate };