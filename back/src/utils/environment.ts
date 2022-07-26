import 'dotenv/config'

export enum EnvironmentVariables {
    PORT = 'PORT',
    DB_USER = 'DB_USER',
    DB_HOST = 'DB_HOST',
    DB_PASS = 'DB_PASS',
    DB_PORT = 'DB_PORT',
    DB_NAME = 'DB_NAME',
    NODE_ENV = 'NODE_ENV'
}

export function getEnvValue(variable: EnvironmentVariables): string | undefined {
    return process.env[variable]
}
