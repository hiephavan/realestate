from cassandra.cluster import Cluster
cluster = Cluster()
session = cluster.connect('test_keyspace')
session.execute("INSERT INTO python_test (id, first_name, last_name) VALUES (uuid(),'boby','hope')")
print "finished"
