from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        self.ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        self.batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)

    def test_user_team(self):
        self.assertEqual(self.ironman.team.name, 'Marvel')
        self.assertEqual(self.batman.team.name, 'DC')

    def test_activity_creation(self):
        activity = Activity.objects.create(user=self.ironman, type='Run', duration=30)
        self.assertEqual(activity.type, 'Run')
        self.assertEqual(activity.duration, 30)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes')
        self.assertEqual(workout.name, 'Morning Cardio')

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(user=self.ironman, points=100)
        self.assertEqual(leaderboard.points, 100)
