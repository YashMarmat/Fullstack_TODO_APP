from django.db import models


class Todo(models.Model):
    task = models.CharField(max_length = 150)
    completed = models.BooleanField(default = False)

    def __str__(self):
        return self.task