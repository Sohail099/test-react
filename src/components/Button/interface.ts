export type ButtonColor = 'primary' | 'secondary' | 'neutral' | 'white' | 'alert';

export const getButtonColor = (color: ButtonColor): string => {
  switch (color) {
    case 'primary':
      return 'bg-emerald-400 hover:bg-emerald-500';
    case 'secondary':
      return 'bg-slate-700 hover:bg-slate-800';
    case 'neutral':
      return 'bg-slate-200 hover:bg-slate-300';
    case 'alert':
      return 'bg-rose-500 hover:bg-rose-600';
    case 'white':
      return 'bg-white hover:bg-slate-300';
    default:
      return 'bg-emerald-400 hover:bg-emerald-500';
  }
};
