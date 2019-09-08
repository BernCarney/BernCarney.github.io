<template>
  <div>
    <header>
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav>
        <g-link to="/">Home</g-link>
        <g-link to="/about">About Me</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

