import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image as HeroUIimage,
} from '@heroui/react'

import config from '@/payload.config'

import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex flex-col justify-between items-center h-screen p-12 max-w-full mx-auto overflow-hidden bg-black text-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!user && (
          <h1 className="my-10 text-4xl font-bold text-center">Welcome to your new project.</h1>
        )}
        {user && (
          <h1 className="my-10 text-4xl font-bold text-center">Welcome back, {user.email}</h1>
        )}
        <div className="flex items-center gap-3">
          <a
            className="text-black bg-white border border-black px-2 py-1 rounded"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="text-white bg-black border border-white px-2 py-1 rounded"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
        <Card className="max-w-[400px] mt-4 bg-slate-800 text-white">
          <CardHeader className="flex gap-3">
            <HeroUIimage
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">HeroUI</p>
              <p className="text-small text-default-400">heroui.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex items-center gap-2 flex-col md:flex-row">
        <p className="m-0">Update this page by editing</p>
        <a className="text-white bg-gray-700 px-2 py-1 rounded" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
