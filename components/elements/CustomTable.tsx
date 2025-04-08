import { ElementType, ReactNode } from 'react';

type CustomTableCellProps = {
  children?: ReactNode;
  rowSpan?: number;
  colSpan?: number;
  as?: ElementType;
};

export const TableCell = ({
  children,
  rowSpan,
  colSpan,
  as = 'td', // デフォルトは 'td'
  ...props
}: CustomTableCellProps) => {
  const Component = as;

  return (
    <Component
      {...props}
      rowSpan={rowSpan}
      colSpan={colSpan}
      className={`custom-table__${as as string}`} // カスタムクラス名の指定（オプション）
    >
      {children}
    </Component>
  );
};
