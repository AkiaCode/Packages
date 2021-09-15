import { request } from '../util.ts'

const searchNpm = (name: string) => {
    return request(`https://registry.npmjs.org/-/v1/search?text=${name}`);
}

const infoNpm = (name: string) => {
    return request(`https://registry.npmjs.org/${name}`);
}

export { searchNpm, infoNpm };