# AngularCustomWebpack

* Utilizar `npm run start` para ver el resultado minimizando y ofuscando el código (como lo haría la configuración de producción por defecto)
* Utilizar `npm run start:prod` para el resultado minimizado pero no ofuscado

En esta solución se utiliza [@angular-builders/custom-webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack) para sobreescribir la configuración del webpack por defecto.

Esta nueva configuración simplemente cambia la propiedad `keepIdentifierNames` a true del plugin [JavaScriptOptimizer](https://github.com/angular/angular-cli/blob/main/packages/angular_devkit/build_angular/src/tools/webpack/plugins/javascript-optimizer-plugin.ts) que es la responsable de realizar esa optimización.

Por último, se hace una breve demostración del cambio, la clase Page dispone de una getter className que devuelve el valor de `this.constructor.name`, si se ejecuta con la configuración por defecto se muestra el valor del className ofuscado, mientras que si se ejecuta con la configuración propuesta se muestra el nombre real de la clase.

La desventaja de hacerlo así, es que el tamaño de los archivos compilados sube considerablemente.
