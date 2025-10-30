
from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Drop collections using PyMongo
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        db['octofit_tracker_activity'].drop()
        db['octofit_tracker_leaderboard'].drop()
        db['octofit_tracker_workout'].drop()
        db['octofit_tracker_user'].drop()
        db['octofit_tracker_team'].drop()

        # Now repopulate using Django ORM
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        captain = User.objects.create(name='Captain America', email='cap@marvel.com', team=marvel)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        superman = User.objects.create(name='Superman', email='superman@dc.com', team=dc)

        Activity.objects.create(user=ironman, type='Run', duration=30)
        Activity.objects.create(user=captain, type='Swim', duration=45)
        Activity.objects.create(user=batman, type='Cycle', duration=60)
        Activity.objects.create(user=superman, type='Yoga', duration=20)

        Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes')
        Workout.objects.create(name='Strength Training', description='Strength for all heroes')

        Leaderboard.objects.create(user=ironman, points=100)
        Leaderboard.objects.create(user=captain, points=90)
        Leaderboard.objects.create(user=batman, points=95)
        Leaderboard.objects.create(user=superman, points=85)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
