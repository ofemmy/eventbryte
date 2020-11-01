import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'
import {ChakraProvider, extendTheme} from "@chakra-ui/core"
InertiaProgress.init()

const el = document.getElementById('app')

const colors={
'light-gray':"#f7fafa",
'primary':"#5A0001"
}
const customTheme= extendTheme({colors})




render(
<ChakraProvider theme={customTheme}>
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    //resolveComponent={name => require(`./Pages/${name}`).default}
  />
  </ChakraProvider>,
  el
)
