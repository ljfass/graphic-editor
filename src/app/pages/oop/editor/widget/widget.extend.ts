export interface SettingDefaultType {
  width: number;
  height: number;
  backgroundColor: string;
  fontSize: number;
  align: string;
}

export class WidgetSettingDefault {
  defaultSetting: SettingDefaultType = {
    width: 100,
    height: 100,
    backgroundColor: '#73945f',
    fontSize: 14,
    align: 'center',
  };

  changeWidth(width: number) {
    this.defaultSetting.width = width;
  }

  changeHight(height: number) {
    this.defaultSetting.height = height;
  }

  changeBackgroundColor(color: string) {
    this.defaultSetting.backgroundColor = color;
  }

  changeFontSize(size: number) {
    if (size < 10 || size > 50) {
      size = 14;
    }
    this.defaultSetting.fontSize = size;
  }

  changeAlign(align: string) {
    this.defaultSetting.align = align;
  }
}
