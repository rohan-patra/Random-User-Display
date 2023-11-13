import Image from 'next/image'
import Link from 'next/link'

import { User } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export function UserModal({ user, onClose }: { user: User; onClose: () => void }) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {user.name.first} {user.name.last}
          <span className="text-sm text-muted-foreground"> {user.login.username}</span>
        </DialogTitle>
        <DialogDescription>
          {user.location.city}, {user.location.state}, {user.location.country}
        </DialogDescription>
      </DialogHeader>
      <div className="grid items-center gap-4 py-4">
        <div className="flex justify-center">
          <Image
            src={user.picture.large}
            alt={`Profile of ${user.name.first} ${user.name.last}`}
            height={120}
            width={120}
            className="rounded-full object-cover"
          />
        </div>
        <p>
          <strong>Age:</strong> {user.dob.age}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <Link className="underline" href={'mailto:' + user.email}>
            {user.email}
          </Link>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <Link className="underline" href={'tel:' + user.cell}>
            {user.cell}
          </Link>
        </p>
      </div>
      <DialogFooter>
        <Button onClick={onClose}>Close</Button>
      </DialogFooter>
    </DialogContent>
  )
}
