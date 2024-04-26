import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  IBreakWords,
  IColor,
  IColorNoShade,
  IColorShade,
  IHTMLTag,
  IStyleType,
  ITextAlign,
  ITextTransform,
  ITextWeight
} from './interface';

const TypographyVariants = cva('text-left', {
  variants: {
    type: {
      h1: 'text-4xl font-extrabold text-slate-800',
      h2: 'text-3xl font-bold text-slate-800',
      h3: 'text-2xl font-bold text-slate-800',
      h4: 'text-xl font-bold text-slate-800',
      lg: 'text-lg text-slate-800',
      standard: 'text-base font-normal text-slate-800',
      sm: 'text-sm font-normal text-slate-800',
      xs: 'text-xs font-normal text-slate-800',
      xxs: 'text-[10px] font-normal text-slate-800',
      inputLabel: 'text-base font-medium text-slate-800',
      inputHint: 'text-base font-medium text-slate-400',
      secondary: 'text-base font-normal text-slate-400',
      inputSub: 'text-xs font-normal text-slate-400'
    },
    transform: {
      capitalize: 'capitalize',
      uppercase: 'uppercase',
      lowercase: 'lowercase'
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
  },
  defaultVariants: {
    type: 'standard'
  }
});

type Props = {
  children: React.ReactNode;
  customColorClass?: `text-${IColor}-${IColorShade}` | `text-${IColorNoShade}`;
  tag?: IHTMLTag;
  align?: ITextAlign;
  breakWords?: IBreakWords;
  transform?: ITextTransform;
  ellipsis?: boolean;
  onClick?: () => void;
  type?: IStyleType;
  weight?: ITextWeight;
  title?: string;
  html?: boolean;
};

const getTagValue = (tag?: IHTMLTag, type?: IStyleType) => {
  if (!tag) {
    if (type === 'h1' || type === 'h2' || type === 'h3' || type === 'h4') {
      return type;
    } else {
      return 'span';
    }
  } else {
    return tag;
  }
};

const getTextTransform = (transform?: ITextTransform): string => {
  if (transform === 'sentenceCase') {
    return 'first-letter:uppercase';
  }
  return transform ?? '';
};

const Typography = ({
  children,
  customColorClass,
  tag,
  align = 'left',
  breakWords,
  transform,
  ellipsis = false,
  type,
  weight = 'regular',
  title,
  html,
  onClick = () => {}
}: Props) => {
  const CustomTag = getTagValue(tag, type);
  const transformClass = getTextTransform(transform);

  return (
    <CustomTag
      data-testid="typography"
      className={twMerge(
        TypographyVariants({
          type,
          weight,
          className: clsx(`block leading-normal text-${align}`, customColorClass, breakWords && `break-${breakWords}`, ellipsis && 'truncate', transformClass)
        })
      )}
      onClick={onClick}
      title={title}
      dangerouslySetInnerHTML={html ? { __html: children as string } : undefined}
      children={!html ? children : undefined}
    />
  );
};

export default Typography;
