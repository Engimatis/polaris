import { ApplicationLogProperties, LoggerConfiguration } from '@enigmatis/polaris-logs';
import { MiddlewaresConfiguration } from '../middlewares/middleware';
import { PolarisProperties } from '../properties/polaris-properties';

export interface LoggerConfig {
    loggerConfiguration: LoggerConfiguration;
}
export interface MiddlewaresConfig {
    middlewaresConfiguration: MiddlewaresConfiguration;
}
export interface PolarisServerConfig {
    polarisProperties: PolarisProperties;
    applicationLogProperties: ApplicationLogProperties;
}
