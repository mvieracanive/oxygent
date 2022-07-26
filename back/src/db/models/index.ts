import config from "../config"
import { Sequelize } from "sequelize"
import { EnvironmentVariables, getEnvValue } from "../../utils/environment";

const options = config[getEnvValue(EnvironmentVariables.NODE_ENV) || 'development']
export const sequelize = new Sequelize(options.database, options.username, options.password, options)
