import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { parse } from 'yamljs';
import 'dotenv/config';

const loadConfig = async () => {
  const path = resolve(__dirname, '../dic/api.yaml');
  const Content = await readFile(path, 'utf-8');
  return parse(Content);
};

export const setupSwagger = async (app: INestApplication) => {
  const config = await loadConfig();
  SwaggerModule.setup('doc', app, config);
};
