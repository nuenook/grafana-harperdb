import { TemplateDatasource } from './datasource';
import { TemplateQueryEditor } from './QueryEditor';
import { ConfigEditor } from './ConfigEditor';

import { DataSourcePlugin } from '@grafana/data';

export const plugin = new DataSourcePlugin(TemplateDatasource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(TemplateQueryEditor);
