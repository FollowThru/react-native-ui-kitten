import * as gulp from 'gulp';
import { execSync } from 'child_process';
import {
  GulpCompletionCallback,
  PACKAGES_BUILD_DIR,
  PACKAGES_DIR,
  ROOT_DIR,
} from './common';

gulp.task('publish-packages', gulp.series(
  validate,
  rebuild,
  publish,
));

function validate(done: GulpCompletionCallback): void {
  execSync("yarn run lint", { cwd: ROOT_DIR });
  execSync("yarn run test", { cwd: ROOT_DIR });
  done();
}

function rebuild(done: GulpCompletionCallback): void {
  execSync("yarn run clean", { cwd: ROOT_DIR });
  execSync("yarn run build", { cwd: ROOT_DIR });
  done();
}

function publish(done: GulpCompletionCallback): void {
  execSync(`yarn publish ${PACKAGES_BUILD_DIR}/components`, { cwd: ROOT_DIR });
  execSync(`yarn publish ${PACKAGES_BUILD_DIR}/date-fns`, { cwd: ROOT_DIR });
  execSync(`yarn publish ${PACKAGES_BUILD_DIR}/eva-icons`, { cwd: ROOT_DIR });
  execSync(`yarn publish ${PACKAGES_BUILD_DIR}/metro-config`, {
    cwd: ROOT_DIR,
  });
  execSync(`yarn publish ${PACKAGES_BUILD_DIR}/moment`, { cwd: ROOT_DIR });
  execSync(`yarn publish ${PACKAGES_DIR}/template-js`, { cwd: ROOT_DIR });
  execSync(`yarn publish ${PACKAGES_DIR}/template-ts`, { cwd: ROOT_DIR });
  done();
}
