'use client'

import React, { useEffect, useState } from 'react'

import { User } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import DataTable from './data-table'
import { UserModal } from './user-modal'

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100&nat=us')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results)
      })
  }, [])

  const handleRowClick = (user: User) => {
    setSelectedUser(user)
    setIsModalOpen(true)
    console.log(user)
  }

  return (
    <>
      <DataTable
        data={users.map((user) => ({
          ...{
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            location: `${user.location.city}, ${user.location.state}`,
          },
          onClick: () => handleRowClick(user),
        }))}
      />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedUser && <UserModal user={selectedUser} onClose={() => setIsModalOpen(false)} />}
      </Dialog>
    </>
  )
}
