from django.urls import path
from .views import VoiceBotView

urlpatterns = [
    path('voice/', VoiceBotView.as_view(), name='voice_bot'),
]