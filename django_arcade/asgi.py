"""
ASGI config for django_arcade project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_arcade.settings')
django.setup()

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
# Import any additional routing modules here

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_arcade.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    # "websocket": AuthMiddlewareStack(
    #     URLRouter(
    #         # Add the routing module here, imported above
    #     )
    # ),
})
