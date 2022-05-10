import { config } from './config';

export default class AbstractWidget {
  constructor() {
    const { font } = config;
    this.text = JSON.parse(JSON.stringify(font));
  }

  text: typeof config.font;

  xuchengdong() {
    console.log('hello world');
    this.text.color = 'blue';
  }
}
