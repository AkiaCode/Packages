import { request } from '../util.ts'

const searchHex = (name: string) => {
    return request(`https://hex.pm/api/packages?sort=downloads&search=${name}`);
}

const infoHex = (name: string) => {
    return request(`https://hex.pm/api/packages/${name}`);
}

export { searchHex, infoHex };