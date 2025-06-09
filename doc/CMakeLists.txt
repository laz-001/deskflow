# SPDX-FileCopyrightText: 2019 - 2024 Chris Rizzitello <sithlord48@gmail.com>
# SPDX-License-Identifier: MIT

find_package(Doxygen QUIET)
option(BUILD_USER_DOCS "Build and install user documentation" ${DOXYGEN_FOUND})
option(BUILD_DEV_DOCS "Build and install developer documentation" ON)

if (DOXYGEN_FOUND)
  if (BUILD_USER_DOCS)
    add_subdirectory(user)
  endif()
  if (BUILD_DEV_DOCS)
    add_subdirectory(dev)
  endif()
else()
  message(STATUS "Doxygen not found, skipping docs build")
endif()
