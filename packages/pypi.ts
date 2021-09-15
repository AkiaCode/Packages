import { request } from '../util.ts'

const infoPypi = (name: string) => {
    return request(`https://pypi.python.org/pypi/${name}/json`);
}

export { infoPypi };