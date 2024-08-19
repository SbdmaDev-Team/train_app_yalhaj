from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in train_ms/__init__.py
from train_ms import __version__ as version

setup(
	name="train_ms",
	version=version,
	description="train_ms",
	author="yalhaj",
	author_email="y@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
