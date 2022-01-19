/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.noSSR = noSSR;\nexports[\"default\"] = dynamic;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === 'undefined';\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        })\n    ;\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return(/*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack));\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions\n        ;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === 'function') {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === 'object') {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const suspenseOptions = loadableOptions;\n    if (true) {\n        // Error if react root is not enabled and `suspense` option is set to true\n        if ( true && suspenseOptions.suspense) {\n            // TODO: add error doc when this feature is stable\n            throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n        }\n    }\n    if (suspenseOptions.suspense) {\n        return loadableFn(suspenseOptions);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n    if (typeof loadableOptions.ssr === 'boolean') {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaQSw4Q0FBNkMsQ0FBQztJQUMxQ0csS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsYUFBYSxHQUFHRSxLQUFLO0FBQ3JCRixrQkFBZSxHQUFHSSxPQUFPO0FBQ3pCLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEJBQVk7U0FDbERELHNCQUFzQixDQUFDRyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLENBQUNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRyxDQUFDO1FBQ2xDTixPQUFPLEVBQUVNLEdBQUc7SUFDaEIsQ0FBQztBQUNMLENBQUM7QUFDRCxLQUFLLENBQUNFLFlBQVksR0FBRyxDQUFhLGVBQUssQ0FBVztTQUN6Q1QsS0FBSyxDQUFDVSxtQkFBbUIsRUFBRUMsZUFBZSxFQUFFLENBQUM7SUFDbEQsRUFBeUU7SUFDekUsTUFBTSxDQUFDQSxlQUFlLENBQUNDLE9BQU87SUFDOUIsTUFBTSxDQUFDRCxlQUFlLENBQUNFLE9BQU87SUFDOUIsRUFBb0Y7SUFDcEYsRUFBRSxHQUFHSixZQUFZLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUNDLG1CQUFtQixDQUFDQyxlQUFlO0lBQzlDLENBQUM7SUFDRCxLQUFLLENBQUNHLE9BQU8sR0FBR0gsZUFBZSxDQUFDSSxPQUFPO0lBQ3ZDLEVBQWdEO0lBQ2hELE1BQU0sS0FBSyxFQUFhLFlBQUNaLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZSxhQUFhLENBQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ3hERyxLQUFLLEVBQUUsSUFBSTtZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxTQUFTLEVBQUUsS0FBSztZ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LENBQUNBLGVBQWUsQ0FBQ3lCLEdBQUc7SUFDOUIsQ0FBQztJQUNELE1BQU0sQ0FBQ2IsVUFBVSxDQUFDWixlQUFlO0FBQ3JDLENBQUMsQ0FFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanM/ZTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9TU1IgPSBub1NTUjtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgO1xufVxuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xuICAgICAgICA7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHN1c3BlbnNlT3B0aW9ucyA9IGxvYWRhYmxlT3B0aW9ucztcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTKSB7XG4gICAgICAgIC8vIEVycm9yIGlmIHJlYWN0IHJvb3QgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX1JPT1QgJiYgc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgZG9jIHdoZW4gdGhpcyBmZWF0dXJlIGlzIHN0YWJsZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICByZXR1cm4gbG9hZGFibGVGbihzdXNwZW5zZU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJub1NTUiIsImRlZmF1bHQiLCJkeW5hbWljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwic3VzcGVuc2VPcHRpb25zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"src_App_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../App */ \"./src/App.tsx\"))\n, {\n    loadableGenerated: {\n        webpack: ()=>[\n                /*require.resolve*/(/*! ../App */ \"./src/App.tsx\")\n            ]\n        ,\n        modules: [\n            \"index.tsx -> \" + \"../App\"\n        ]\n    },\n    ssr: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUVsQyxpRUFBZUEsbURBQU8sS0FBT0MsdUlBQWU7Ozs7Ozs7Ozs7O0lBQUtDLEdBQUcsRUFBRSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9BcHAnKSwgeyBzc3I6IGZhbHNlIH0pXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsImltcG9ydCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzPzczZDQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "@ethersproject/units":
/*!***************************************!*\
  !*** external "@ethersproject/units" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/units");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/SSRProvider":
/*!**********************************************!*\
  !*** external "react-bootstrap/SSRProvider" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/SSRProvider");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3-react/core");;

/***/ }),

/***/ "@web3-react/metamask":
/*!***************************************!*\
  !*** external "@web3-react/metamask" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3-react/metamask");;

/***/ }),

/***/ "@web3-react/walletconnect":
/*!********************************************!*\
  !*** external "@web3-react/walletconnect" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3-react/walletconnect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();