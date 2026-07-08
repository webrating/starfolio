function readPackageHook(pkg) {
  if (pkg.name === 'esbuild' || pkg.name === 'sharp' || pkg.name === 'workerd') {
    pkg.pnpm = pkg.pnpm || {};
    pkg.pnpm.allowedBuildScripts = true;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage: readPackageHook,
  },
};
