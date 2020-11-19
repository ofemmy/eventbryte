import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'
import {ChakraProvider, extendTheme} from "@chakra-ui/react"


InertiaProgress.init()

const el = document.getElementById('app')


const customTheme= extendTheme({
    colors:{
    'light-gray':"#f7fafa",
    'primary':"#F56565",
    'primary-dark':"#F24343"
    }
})


render(
<ChakraProvider theme={customTheme}>
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />
  </ChakraProvider>,
  el
)
