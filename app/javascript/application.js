// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import "trix"
import "@rails/actiontext"
import "./validate"
import "./validators/creditCardFormat"
import "./validators/routing_number_format"
