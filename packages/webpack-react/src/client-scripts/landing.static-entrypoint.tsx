import React from 'react'
import { LandingPage } from '@/pages'
import { mount } from '@/utils'
import { DOCUMENT_ROOT_ID } from '@/config/client'

mount(DOCUMENT_ROOT_ID, <LandingPage />, { log: false })
