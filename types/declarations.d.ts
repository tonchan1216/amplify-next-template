// types/declarations.d.ts
import '@aws-amplify/ui-react';

declare module '@aws-amplify/ui-react' {
  interface TableCellProps {
    colspan?: number;
    rowspan?: number;
  }
}
