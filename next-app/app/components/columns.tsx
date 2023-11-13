import { ColumnDef } from '@tanstack/react-table'

export type User = {
  name: string
  email: string
  location: string
  onClick?: () => void
}

export const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'location', header: 'Location' },
]
