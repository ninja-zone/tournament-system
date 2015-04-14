# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
app = "app"

css_dir = app + "/css"
sass_dir = app + "/scss"
images_dir = app + "/img"
javascripts_dir = app + "/src"

output_style = :compressed # :expanded or :nested or :compact or :compressed

# Workaround for "Invalid US-ASCII character" error
Encoding.default_external = "utf-8"
