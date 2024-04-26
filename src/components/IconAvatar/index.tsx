import { cva } from 'class-variance-authority';
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export type IconProps = {
  IconType?: 'square' | 'round';
  size: 'sm' | 'md' | 'lg' | 'oval';
  bgColor?: 'primary' | 'red' | 'green';
  bgColorHexa?: string;
  Icon: IconType;
};

const IconAvatarBodyVariants = cva('relative inline-flex items-center justify-center overflow-hidden ', {
  variants: {
    IconType: {
      square: 'rounded-[4px]',
      round: 'rounded-full'
    },
    size: {
      sm: 'w-7 h-7',
      md: 'w-8 h-8',
      lg: 'w-[66px] h-[71px]',
      oval: 'w-[66px] h-[71px]'
    },
    bgColor: {
      primary: 'bg-slate-700',
      red: 'bg-red-700',
      green: 'bg-emerald-500'
    }
  },
  defaultVariants: {
    IconType: 'round',
    size: 'md',
    bgColor: 'primary'
  }
});

const IconAvatarBodyVariantsWithoutBg = cva('relative inline-flex items-center justify-center overflow-hidden ', {
  variants: {
    IconType: {
      square: 'rounded-[4px]',
      round: 'rounded-full'
    },
    size: {
      sm: 'w-7 h-7',
      md: 'w-8 h-8',
      lg: 'w-[67px] h-[70px]',
      oval: 'w-[66px] h-[71px]'
    }
  },
  defaultVariants: {
    IconType: 'round',
    size: 'md'
  }
});

const IconAvatarVariants = cva('text-slate-50', {
  variants: {
    size: {
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-10 w-10',
      oval: 'w-[66px] h-[75px]'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const IconAvatar = ({ IconType = 'round', size, Icon, bgColor = 'primary', bgColorHexa }: IconProps) => {
  const valueClassName = bgColorHexa
    ? twMerge(
        IconAvatarBodyVariantsWithoutBg({
          IconType,
          size
        })
      )
    : twMerge(
        IconAvatarBodyVariants({
          IconType,
          bgColor,
          size
        })
      );

  return bgColorHexa ? (
    <div className={valueClassName} style={{ backgroundColor: bgColorHexa }}>
      <Icon
        className={twMerge(
          IconAvatarVariants({
            size
          })
        )}
      />
    </div>
  ) : (
    <div className={valueClassName}>
      <Icon
        className={twMerge(
          IconAvatarVariants({
            size
          })
        )}
      />
    </div>
  );
};

export default IconAvatar;
