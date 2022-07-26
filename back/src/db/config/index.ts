import { EnvironmentVariables, getEnvValue } from "../../utils/environment";

export = {
    'development':{
        username: getEnvValue(EnvironmentVariables.DB_USER) || '',
        password: getEnvValue(EnvironmentVariables.DB_PASS) || '',
        database: getEnvValue(EnvironmentVariables.DB_NAME) || '',
        host: getEnvValue(EnvironmentVariables.DB_HOST) || '',
        dialect: "mysql"
    },
    'test': {
        username: 'maia',
        password: 'mysqlpass',
        database: 'test',
        host: 'localhost',
        dialect: "mysql"
    }
}