import { FaRegHandPointer } from 'react-icons/fa';
export type ShortCutDataType = {
  id: number;
  shortcutList: Shortcut[];
  action: string;
};

export type Shortcut = {
  keyName: string | React.ReactNode;
  description?: string;
  isModifier?: boolean;
  multiple?: Shortcut[];
};

export const basicShortcutData: ShortCutDataType[] = [
  {
    id: 1,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: 'X',
      },
    ],
    action: 'カット',
  },
  {
    id: 2,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: 'D',
      },
    ],
    action: '複製',
  },
  {
    id: 3,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: 'Z',
      },
    ],
    action: '作業を一つ戻す',
  },
  {
    id: 4,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: '⇧',
        description: 'shift',
        isModifier: true,
      },
      {
        keyName: 'Z',
      },
    ],
    action: '作業を一つ進める',
  },
  {
    id: 5,
    shortcutList: [
      {
        keyName: '⌥',
        description: 'option',
        isModifier: true,
      },
      {
        keyName: <FaRegHandPointer />,
        description: 'drag',
      },
    ],
    action: 'コピー',
  },
  {
    id: 6,
    shortcutList: [
      {
        keyName: '⇧',
        description: 'shift',
        isModifier: true,
      },
      {
        keyName: <FaRegHandPointer />,
        description: 'drag',
      },
    ],
    action: '水平 or 垂直に移動',
  },
];

export const textShortcutData: ShortCutDataType[] = [
  {
    id: 1,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: 'B',
      },
    ],
    action: 'ボールド',
  },
  {
    id: 2,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: 'U',
      },
    ],
    action: '下線',
  },
  {
    id: 3,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: 'Z',
      },
    ],
    action: '作業を一つ戻す',
  },
  {
    id: 4,
    shortcutList: [
      {
        keyName: '⌘',
        description: 'command',
        isModifier: true,
      },
      {
        keyName: '⇧',
        description: 'shift',
        isModifier: true,
      },
      {
        keyName: '',
        multiple: [
          {
            keyName: '<',
          },
          {
            keyName: '>',
          },
        ],
      },
    ],
    action: 'フォントサイズ調整',
  },
  {
    id: 5,
    shortcutList: [
      {
        keyName: '⌥',
        description: 'option',
        isModifier: true,
      },
      {
        keyName: '',
        multiple: [
          {
            keyName: '<',
          },
          {
            keyName: '>',
          },
        ],
      },
    ],
    action: 'コピー',
  },
];
