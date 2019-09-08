<template>
  <div>
    <header>
      <nav
        class="flex items-center justify-between flex-wrap bg-gray-900 px-6 py-4"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <g-link to="/"
            ><span class="text-l text-green-400 font-mono"
              >>
              <span class="hover:text-white"
                >/home/{{ $static.metaData.siteName.toLowerCase() }}</span
              >{{ this.$route.path }}</span
            ></g-link
          >
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-red-600 border-red-600 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
          <div>
            <span
              class="text-gray-700 text-l font-mono font-semibold tracking-tight mr-4"
              >CD</span
            >
            <g-link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4 uppercase"
            >
              Home
            </g-link>
            <g-link
              to="/about"
              class="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-white mr-4 uppercase"
            >
              About Me
            </g-link>
            <g-link
              to="/blog"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 uppercase cursor-not-allowed"
            >
              Blog
            </g-link>
          </div>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
    siteUrl
    pathPrefix
  }
}
</static-query>

