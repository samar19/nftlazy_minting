import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import SimpleSidebar from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <SimpleSidebar children={undefined} />
  </ChakraProvider>,
  rootElement
);