import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'nombre',
      label: 'Nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'apellido',
      label: 'Apellido',
      type: 'text',
      required: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
  timestamps: true,
}
