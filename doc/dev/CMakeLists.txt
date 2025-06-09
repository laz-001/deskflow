# SPDX-FileCopyrightText: 2019 - 2024 Chris Rizzitello <sithlord48@gmail.com>
# SPDX-License-Identifier: MIT

set(DOXYGEN_EXTRACT_ALL YES)
set(DOXYGEN_STRIP_FROM_PATH ${CMAKE_SOURCE_DIR})
set(DOXYGEN_USE_MDFILE_AS_MAINPAGE mainpage.md)
set(DOXYGEN_QUIET YES)
set(DOXYGEN_EXCLUDE_PATTERNS "*unittests/*")

# Files used to make our documents
# User facing documents will not include doxy comments in source code
doxygen_add_docs(dev-docs
  ${CMAKE_CURRENT_SOURCE_DIR}
  ${CMAKE_SOURCE_DIR}/src
  COMMENT "Generating developer documentation" ALL)

# HACK Only these will show in your IDE
target_sources(dev-docs PRIVATE
  mainpage.md
  contributing.md
  build.md
)

# missing install target in intended generate a local copy
